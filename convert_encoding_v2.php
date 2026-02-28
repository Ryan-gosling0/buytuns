<?php
function convert_to_utf8($filepath) {
    echo "Converting $filepath to UTF-8...\n";
    if (!file_exists($filepath)) {
        echo "File not found: $filepath\n";
        return;
    }
    $content = file_get_contents($filepath);
    
    // Convert from Windows-1252 to UTF-8
    // Note: We use 'Windows-1252' instead of 'ISO-8859-1' to handle characters like en-dash
    $converted_content = mb_convert_encoding($content, 'UTF-8', 'Windows-1252');
    
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
