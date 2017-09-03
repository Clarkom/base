json.extract! owner, :id, :full_name, :home_phone, :mobile_phone, :created_at, :updated_at
json.url owner_url(owner, format: :json)
