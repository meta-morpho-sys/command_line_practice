require 'figlet'

font = Figlet::Font.new('colossal.flf')

figlet = Figlet::Typesetter.new(font)

puts figlet['COMMANDOS']
