# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :phx_eslint,
  ecto_repos: [PhxEslint.Repo]

# Configures the endpoint
config :phx_eslint, PhxEslintWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "mGW0ELTD7gr6Z5jsrzWUff4rEFgz1hv9HtZVmPrZWQuB+rEvbfkcSSKp6KQXpyf/",
  render_errors: [view: PhxEslintWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: PhxEslint.PubSub, adapter: Phoenix.PubSub.PG2],
  live_view: [signing_salt: "XA3S7sRB"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
