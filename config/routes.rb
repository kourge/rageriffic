Rageriffic::Application.routes.draw do
  match 'about'                     => 'game#about'
  root  :to                         => 'rounds#start_game'
  match 'rounds/start_game'         => 'rounds#start_game'
  match 'rounds/join/:id'           => 'rounds#join'
  match 'rounds/round/:id'          => 'rounds#round'
  match 'rounds/participations/:id' => 'rounds#participations'
  match 'rounds/state/:id'          => 'rounds#state'
  match 'rounds/start/:id'          => 'rounds#start'
  match 'rounds/pic/:id'            => 'rounds#pic'
  match 'rounds/vote/:id'           => 'rounds#vote'
  match 'rounds/voting/:id'         => 'rounds#voting'
  match 'rounds/play/:id'           => 'rounds#play'
  match 'rounds/play'               => 'rounds#play'
  match 'rounds/winner/:id'         => 'rounds#winner'
  match 'rounds/late'               => 'rounds#late'
  match 'rounds/:id'                => 'rounds#show'

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => 'welcome#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'
end
