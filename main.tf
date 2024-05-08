# Define the provider
provider "aws" {
  region = "us-west-2"
}

# Define the random pet name with a hyphen as a separator
resource "random_pet" "name" {
  length    = 2
  separator = "-"
}

# Define the S3 bucket with a valid name
resource "aws_s3_bucket" "my_bucket" {
  bucket = "my-terraform-bucket-${random_pet.name.id}"
}

# Upload files to the S3 bucket
resource "null_resource" "upload_files" {
  provisioner "local-exec" {
    command = "aws s3 cp /Users/chrhorne/Documents/Multiverse/inventory-app.zip s3://${aws_s3_bucket.my_bucket.bucket}/inventory-app/"
  }
}

# Define the EC2 instance
resource "aws_instance" "my-instance" {
  ami           = "ami-023e152801ee4846a"
  instance_type = "t2.micro"
  key_name      = "my-key-pair"

  depends_on = [null_resource.upload_files]

  provisioner "remote-exec" {
    connection {
      type        = "ssh"
      user        = "ec2-user"
      private_key = file("~/.ssh/my-key-pair.pem")
      host        = self.public_ip
    }
    inline = [
      "sudo yum update -y",
      "sudo yum install -y jq",
      "curl -sL https://rpm.nodesource.com/current.x | sudo bash -",
      "sudo yum install -y nodejs",
      "sudo mkdir -p /opt/inventory-app",
      "echo 'Directory created'",
      "sudo aws s3 cp s3://${aws_s3_bucket.my_bucket.bucket}/inventory-app.zip /opt/inventory-app/",
      "echo 'Files copied'",
      "jq '.scripts.build = \"webpack\"' /opt/inventory-app/package.json > /opt/inventory-app/package.tmp && mv /opt/inventory-app/package.tmp /opt/inventory-app/package.json",
      "echo 'JSON updated'",
      "cd /opt/inventory-app && npm start",
      "echo 'NPM build done'",
      "sudo chmod +x /opt/inventory-app/start.sh",
      "echo 'Script made executable'",
      "sudo /opt/inventory-app/start.sh",
      "echo 'Application started'"
    ]
  }
}
