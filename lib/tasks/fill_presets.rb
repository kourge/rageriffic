f = `ls public/rage`.split("\n")
puts f.inspect
f.each do |l|
  puts l
  Preset.new('face' => "/rage/#{l}").save
end
