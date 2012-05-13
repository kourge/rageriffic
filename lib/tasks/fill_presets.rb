f = File.new(File.join(File.dirname(__FILE__), "presets.txt"))
puts f.inspect
f.each do |l|
  puts l
  Preset.new('face' => "/rage/#{l}").save
end
