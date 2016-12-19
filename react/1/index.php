<html>
    <head>
        <meta charset="utf-8">
        <title>React.js Tutorial</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

        <script src="vendor/lib/codemirror.js" type="text/javascript" charset="utf-8"></script>
        <script src="vendor/addon/selection/active-line.js" type="text/javascript" charset="utf-8"></script>
        <link rel="stylesheet" href="vendor/lib/codemirror.css" />
        <link rel="stylesheet" href="vendor/theme/material.css" />
        <link rel="stylesheet" href="lesson.css" />

        <!-- add Javascript-mode dependencies -->
        <script src="vendor/mode/javascript/javascript.js" type="text/javascript" charset="utf-8"></script>
    </head>
    <body>
        <h2>React.js MTFKRS</h2>
        <div id="editor">
        </div>



        <script>
            $(document).ready(function(){
                var codemirror = CodeMirror($('#editor').get(0), {
                    value: $('#template').text(),
                    mode:  "javascript",
                    styleActiveLine: true,
                    lineNumbers: true,
                    theme: 'material'
                });

                codemirror.on('change', function(e){
                    var value = e.getValue();

                    $.ajax({
                        url: 'write.php',
                        method: "post",
                        data: {
                            content: value
                        }
                    });

                    document.getElementById('result').contentWindow.location.reload();

                });
            });
        </script>

        <script type="html/template" id="template">
            <?php echo file_get_contents('content.txt'); ?>
        </script>

        <iframe src="result.php" id="result" width="100%"></iframe>
    </body>
</html>
