javascripts = Dir.glob('js/**/*.js')
stylesheets = Dir.glob('css/**/*.css')

main_js = javascripts.map do |f|
  File.read(f)
end.join("\n")

main_css = stylesheets.map do |f|
  File.read(f)
end.join("\n")

File.open("main.js", "w") { |file|  file << main_js }
File.open("main.css", "w") { |file|  file << main_css }