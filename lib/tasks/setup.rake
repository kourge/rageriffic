task :setup do
  puts "Setting up Database..."
  `rake db:migrate`
  puts "Backfilling Database data..."
  `rails runner lib/tasks/fill_presets.rb`
end
