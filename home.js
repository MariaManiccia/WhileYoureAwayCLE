// This is the addition javascript for my page built on Word Press

function is_user_logged_in() {
    $user = wp_get_current_user();
 
    return $user->exists();
}

