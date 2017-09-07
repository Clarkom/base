module ApplicationHelper

  #
  #
  #
  def current_path(path)
    current_uri = request.env['PATH_INFO']
    current_uri.include? path
  end

  #
  #
  #
  def get_page_title

     if current_path('expenses/')
       render :inline => "#{fa_icon 'bank'} Dépenses"

       elsif current_path('cabs')
         render :inline => "#{fa_icon 'taxi'} Véhicule"

     elsif current_path('statistics')
       render :inline => "#{fa_icon 'bar-chart'} Statistiques"

     elsif current_path('/')
       render :inline => "#{fa_icon 'home'} Accueil"

     end

  end

end
