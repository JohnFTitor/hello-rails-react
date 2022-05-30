class V1::GreetingsController < ApplicationController
  def index
    greeting = Greeting.find(Greeting.pluck(:id).sample)
    render json: {
      :greeting => greeting.text,
    }.to_json
  end
end
