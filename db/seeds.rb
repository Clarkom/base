# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

if ENV['VERSION'].present?
  seed_files = Dir[File.join(File.dirname(__FILE__), 'seeds', "*#{ENV['VERSION']}*.rb")]
  raise "No seed files found matching '#{ENV['VERSION']}'" if seed_files.empty?
else
  seed_files = Dir[File.join(Rails.root, 'db', 'seeds', '*.rb')].sort.each { |seed| load seed }
end

seed_files.sort_by{|f| File.basename(f).to_i}.each do |file|
  require File.join(File.dirname(__FILE__), 'seeds', File.basename(file, File.extname(file)))
end