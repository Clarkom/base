class Break < ApplicationRecord

  belongs_to :expense, optional: true
  belongs_to :break_cause

  accepts_nested_attributes_for :expense, :allow_destroy => true

  validates :start_date, presence: true
  validates :end_date, presence: true

  def self.breaks_sum
    self.includes(:expense).pluck(:amount).sum
  end

  def self.breaks_by_year(year)

    ApplicationController.helpers.similar_expenses_amounts_by_month(self.includes(:expense).where('extract(year from start_date) = ?', year)
        .select(Break.column_names - ['break_cause_id', 'damage_id', 'created_at', 'updated_at'])
        .pluck(:start_date.to_s, :amount))

  end

  def self.breaks_by_year_and_month(year, month)
    self.where('extract(year from start_date) = ?', year)
        .where('extract(month from start_date) = ?', month)
        .select(Break.column_names - ['expense_id', 'break_cause_id', 'created_at', 'updated_at'])
  end

end
