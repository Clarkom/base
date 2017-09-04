class AddBreakCauseAndDamageToBreak < ActiveRecord::Migration[5.1]
  def change
    add_reference :breaks, :break_cause, foreign_key: true
    add_reference :breaks, :damage, foreign_key: true
  end
end
