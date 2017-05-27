$script = <<SCRIPT
sudo apt-get update
sudo apt-get -y install python-software-properties build-essential
sudo apt-add-repository ppa:brightbox/ruby-ng
sudo apt-get update
sudo apt-get -y install ruby2.2 ruby2.2-dev ruby-switch
sudo apt-get update
sudo ruby-switch --set ruby2.2
sudo gem install github-pages --no-ri --no-rdoc
sudo gem install jekyll bundler
cd /vagrant/portfolio_leahhelmrich
sudo bundle install
jekyll server --host=0.0.0.0 --watch --force_polling -P 8124
SCRIPT

Vagrant.configure("2") do |config|
  config.vm.box = "hashicorp/precise32"
  config.vm.network "forwarded_port", guest: 8124, host: 8124
  config.vm.provision "shell", inline: $script
  config.ssh.forward_agent = true
end