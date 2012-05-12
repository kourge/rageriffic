module Rageriffic::Views
  class HeadPartial < Mustache
    def initialize(title, *stylesheets)
      @title = title
      @stylesheets = stylesheets
    end

    def title
      @title
    end

    def css
      arr = []
      @stylesheets.each do |path|
        cur = {}
        cur["path"] = path
        arr << cur
      end

      arr
  end
end
