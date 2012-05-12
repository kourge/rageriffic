module Rageriffic::Views
  class Layout < Mustache
    def title 
      @title || "Rageriffic"
    end

    def css
      @path || [
        { "path": "" }
      ]
    end
  end
end
