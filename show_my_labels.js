function show_my_labels() {
  
  var my_labels = Gmail.Users.Labels.list( 'me' );

  i = 0;
  while ( i < my_labels.labels.length ) {
    Logger.log( my_labels.labels[i].type + " -- " + my_labels.labels[i].name );
    i++;
  }

}

