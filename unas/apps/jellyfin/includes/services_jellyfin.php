<?php
/**
 * Jellyfin service for U-NAS class.
*/

function getjellyfinstate()
{
    # Get Jellyfin server state.
    $commamd = 'sudo service jellyfin status';
    $return_var = 1;
    # $? == 0 : Normal.
    #    else : failed.
    exec($commamd, &$return_var);
    if ($return_var == 0) {
        echo 'enable'
    }
    else
    {
        echo 'failed'
    }
}

function startjellyfin()
{
    # Start Jellyfin server.
    $commamd = 'sudo service jellyfin start';
    $return_var = 1;
    # Always return 0... No Use.
    exec($commamd, &$return_var);
    echo 'done'
}

function stopjellyfin()
{
    # Stop Jellyfin server.
    $commamd = 'sudo service jellyfin stop';
    $return_var = 1;
    # Always return 0... No Use.
    exec($commamd, &$return_var);
    echo 'done'
}

if(isset($_POST['action']) && !empty($_POST['action'])) {
    $action = $_POST['action'];
    switch($action) {
        case 'getjellyfinstate' : getjellyfinstate();break;
        case 'startjellyfin' : startjellyfin();break;
        case 'stopjellyfin' : stopjellyfin();break;
        default: throw new Exception('Unknown action: $action');
    }
}

?>