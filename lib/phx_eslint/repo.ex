defmodule PhxEslint.Repo do
  use Ecto.Repo,
    otp_app: :phx_eslint,
    adapter: Ecto.Adapters.Postgres
end
