class Rageriffic
  module Views
    class Layout < Mustache
      def title 
        @title || "Rageriffic"
      end
    end
  end
end
