module Rageriffic::Views
  class StartGame < Layout
    def title
      "Rageriffic"
    end

    def path
      [
        { "path": "css/rageriffic.css" }
      ]
    end
  end
end
