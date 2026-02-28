<?php

function restore_file($filepath) {
    echo "Restoring $filepath...\n";
    if (!file_exists($filepath)) {
        echo "File not found: $filepath\n";
        return;
    }

    $content = trim(file_get_contents($filepath));
    if (empty($content)) {
        echo "File is empty: $filepath\n";
        return;
    }

    $codes = explode(' ', $content);
    $decoded_content = "";
    foreach ($codes as $code) {
        if (is_numeric($code)) {
            $decoded_content .= chr((int)$code);
        }
    }

    if (file_put_contents($filepath, $decoded_content) !== false) {
        echo "Successfully restored $filepath\n";
    } else {
        echo "Error writing to $filepath\n";
    }
}

$files_to_restore = [
    "c:\\xampp\\htdocs\\naggystore\\buytuns\\admin.html",
    "c:\\xampp\\htdocs\\naggystore\\buytuns\\client.html"
];

foreach ($files_to_restore as $file) {
    restore_file($file);
}
?>
