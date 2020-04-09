defmodule PhxEslintWeb.PageController do
  use PhxEslintWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
