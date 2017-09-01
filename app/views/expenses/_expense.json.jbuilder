json.extract! expense, :id, :amount, :attached_file, :description, :created_at, :updated_at
json.url expense_url(expense, format: :json)
