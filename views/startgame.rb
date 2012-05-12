module Rageriffic::Views
  class StartGame < Layout
    def title
      "Rageriffic-tastic!"
    end

    def css
      [
        { "path" => "css/rageriffic.css" }
      ]
    end
  end
end
