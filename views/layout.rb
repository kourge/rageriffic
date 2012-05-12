module Rageriffic::Views
  class Layout < Mustache
    def title 
      @title || "Rageriffic"
    end

    def path
      @path || [
        { "path": "" }
      ]
    end
  end
end
