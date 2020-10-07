<?php
/**
 * Jellyfin service for U-NAS class.
*/

function getjellyfinstate()
{
    # Get Jellyfin server state.
    $commamd = 'sudo service jellyfin status';
    # $? == 0 : Normal.
    #    else : failed.
    exec($commamd, $return_array, $return_var);
    if ($return_var == 0) {
        echo 'enable';
    }
    else
    {
        echo 'failed';
    }
}

function startjellyfin()
{
    # Start Jellyfin server.
    $commamd = 'sudo service jellyfin start';
    exec($commamd);
    echo 'done';
}

function stopjellyfin()
{
    # Stop Jellyfin server.
    $commamd = 'sudo service jellyfin stop';
    exec($commamd);
    echo 'done';
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