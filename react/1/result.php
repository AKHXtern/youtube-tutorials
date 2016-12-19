<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
<link rel="stylesheet" href="lesson.css">

<div id="editorRes">
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react-dom.min.js"></script>
<script src="https://npmcdn.com/babel-transform-in-browser@6.4.6/dist/btib.min.js"></script>
<script type="text/es2015" id="es2015">
    <?php
        echo file_get_contents('content.txt');
    ?>
</script>
