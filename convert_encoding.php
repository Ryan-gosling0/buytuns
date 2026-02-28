<?php
function convert_to_utf8($filepath) {
    echo "Converting $filepath to UTF-8...\n";
    if (!file_exists($filepath)) {
        echo "File not found: $filepath\n";
        return;
    }
    $content = file_get_contents($filepath);
    
    // Convert from Latin-1 to UTF-8
    $converted_content = mb_convert_encoding($content, 'UTF-8', 'ISO-8859-1');
    
    if (file_put_contents($filepath, $converted_content) !== false) {
        echo "Successfully converted $filepath to UTF-8\n";
    } else {
        echo "Error writing to $filepath\n";
    }
}

$files = [
    "c:\\xampp\\htdocs\\naggystore\\buytuns\\admin.html",
    "c:\\xampp\\htdocs\\naggystore\\buytuns\\client.html"
];

foreach ($files as $file) {
    convert_to_utf8($file);
}
?>
