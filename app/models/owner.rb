class Owner < ApplicationRecord

  validates :full_name, presence: true
  validates :mobile_phone, presence: true

end
