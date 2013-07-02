# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'kaede/version'

Gem::Specification.new do |spec|
  spec.name          = "kaede"
  spec.version       = Kaede::VERSION
  spec.authors       = ["t32k"]
  spec.email         = ["ijok.ijok@gmail.com"]
  spec.description   = "Sass-based CSS framework, but it's empty."
  spec.summary       = "Sass-based CSS framework."
  spec.homepage      = "https://github.com/t32k/maple.css"
  spec.license       = "MIT"

  spec.files         = `git ls-files`.split($/)
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.3"
  spec.add_development_dependency "rake"
end
