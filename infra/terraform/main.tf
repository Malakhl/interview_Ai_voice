terraform {
  required_providers {
    aws = { source = "hashicorp/aws", version = "~> 5.0" }
  }
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_security_group" "svi_sg" {
  name = "svi-security-group"
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    from_port   = 30080
    to_port     = 30080
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "master" {
  ami           = "ami-0c7217cdde317cfec" 
  instance_type = "t3.micro"
  key_name      = "svi-key"
  vpc_security_group_ids = [aws_security_group.svi_sg.id]
  tags          = { Name = "SVI-Master" }
}

resource "aws_instance" "worker" {
  ami           = "ami-0c7217cdde317cfec"
  instance_type = "t3.micro"
  key_name      = "svi-key"
  vpc_security_group_ids = [aws_security_group.svi_sg.id]
  tags          = { Name = "SVI-Worker" }
}

output "master_ip" { value = aws_instance.master.public_ip }
output "worker_ip" { value = aws_instance.worker.public_ip }