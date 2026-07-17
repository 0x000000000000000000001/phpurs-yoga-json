<?php

$exports['_parseJSON'] = function($payload) {
    return \json_decode($payload);
};

$exports['_undefined'] = null;

$exports['_unsafeStringify'] = function($data) {
    return \json_encode($data);
};

$exports['_unsafePrettyStringify'] = function($spaces) {
    return function($data) use ($spaces) {
        return \json_encode($data, JSON_PRETTY_PRINT);
    };
};

return $exports;
