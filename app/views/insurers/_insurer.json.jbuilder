json.extract! insurer, :id, :name, :picture, :address, :phone, :created_at, :updated_at
json.url insurer_url(insurer, format: :json)
