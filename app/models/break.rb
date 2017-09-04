class Break < ApplicationRecord
  belongs_to :expense
  belongs_to :break_cause

  validates :start_date, presence: true
  validates :end_date, presence: true

end
