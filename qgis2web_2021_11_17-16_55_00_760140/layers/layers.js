var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_cultivos_1 = new ol.format.GeoJSON();
var features_cultivos_1 = format_cultivos_1.readFeatures(json_cultivos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cultivos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cultivos_1.addFeatures(features_cultivos_1);
var lyr_cultivos_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cultivos_1, 
                style: style_cultivos_1,
                interactive: true,
                title: '<img src="styles/legend/cultivos_1.png" /> cultivos'
            });
var format_redvial_2 = new ol.format.GeoJSON();
var features_redvial_2 = format_redvial_2.readFeatures(json_redvial_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_redvial_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_redvial_2.addFeatures(features_redvial_2);
var lyr_redvial_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_redvial_2, 
                style: style_redvial_2,
                interactive: true,
                title: '<img src="styles/legend/redvial_2.png" /> redvial'
            });
var format_casas_3 = new ol.format.GeoJSON();
var features_casas_3 = format_casas_3.readFeatures(json_casas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_casas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_casas_3.addFeatures(features_casas_3);
var lyr_casas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_casas_3, 
                style: style_casas_3,
                interactive: true,
                title: '<img src="styles/legend/casas_3.png" /> casas'
            });
var format_reservorios_4 = new ol.format.GeoJSON();
var features_reservorios_4 = format_reservorios_4.readFeatures(json_reservorios_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reservorios_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reservorios_4.addFeatures(features_reservorios_4);
var lyr_reservorios_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reservorios_4, 
                style: style_reservorios_4,
                interactive: true,
                title: '<img src="styles/legend/reservorios_4.png" /> reservorios'
            });
var format_pradera_5 = new ol.format.GeoJSON();
var features_pradera_5 = format_pradera_5.readFeatures(json_pradera_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pradera_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pradera_5.addFeatures(features_pradera_5);
var lyr_pradera_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pradera_5, 
                style: style_pradera_5,
                interactive: true,
                title: '<img src="styles/legend/pradera_5.png" /> pradera'
            });
var format_alberca_6 = new ol.format.GeoJSON();
var features_alberca_6 = format_alberca_6.readFeatures(json_alberca_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alberca_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_alberca_6.addFeatures(features_alberca_6);
var lyr_alberca_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_alberca_6, 
                style: style_alberca_6,
                interactive: true,
                title: '<img src="styles/legend/alberca_6.png" /> alberca'
            });
var format_rio_7 = new ol.format.GeoJSON();
var features_rio_7 = format_rio_7.readFeatures(json_rio_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rio_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rio_7.addFeatures(features_rio_7);
var lyr_rio_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rio_7, 
                style: style_rio_7,
                interactive: true,
                title: '<img src="styles/legend/rio_7.png" /> rio'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_cultivos_1.setVisible(true);lyr_redvial_2.setVisible(true);lyr_casas_3.setVisible(true);lyr_reservorios_4.setVisible(true);lyr_pradera_5.setVisible(true);lyr_alberca_6.setVisible(true);lyr_rio_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_cultivos_1,lyr_redvial_2,lyr_casas_3,lyr_reservorios_4,lyr_pradera_5,lyr_alberca_6,lyr_rio_7];
lyr_cultivos_1.set('fieldAliases', {'fid': 'fid', 'area': 'area', 'perimetro': 'perimetro', 'Tipo': 'Tipo', });
lyr_redvial_2.set('fieldAliases', {'fid': 'fid', 'Estado': 'Estado', 'Tipo': 'Tipo', 'Distancia': 'Distancia', });
lyr_casas_3.set('fieldAliases', {'fid': 'fid', 'dueño': 'dueño', 'Tipo': 'Tipo', });
lyr_reservorios_4.set('fieldAliases', {'fid': 'fid', 'Estado': 'Estado', 'Area': 'Area', 'Perimetro': 'Perimetro', });
lyr_pradera_5.set('fieldAliases', {'fid': 'fid', 'Area': 'Area', 'Perimetro': 'Perimetro', 'Estado': 'Estado', });
lyr_alberca_6.set('fieldAliases', {'fid': 'fid', 'Tipo': 'Tipo', 'Area': 'Area', 'Perimetro': 'Perimetro', });
lyr_rio_7.set('fieldAliases', {'fid': 'fid', 'Distancia': 'Distancia', 'Tipoc': 'Tipoc', });
lyr_cultivos_1.set('fieldImages', {'fid': 'TextEdit', 'area': 'TextEdit', 'perimetro': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_redvial_2.set('fieldImages', {'fid': 'TextEdit', 'Estado': '', 'Tipo': '', 'Distancia': '', });
lyr_casas_3.set('fieldImages', {'fid': 'TextEdit', 'dueño': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_reservorios_4.set('fieldImages', {'fid': 'TextEdit', 'Estado': 'TextEdit', 'Area': 'TextEdit', 'Perimetro': 'TextEdit', });
lyr_pradera_5.set('fieldImages', {'fid': 'TextEdit', 'Area': 'TextEdit', 'Perimetro': 'TextEdit', 'Estado': 'TextEdit', });
lyr_alberca_6.set('fieldImages', {'fid': 'TextEdit', 'Tipo': 'TextEdit', 'Area': 'TextEdit', 'Perimetro': 'TextEdit', });
lyr_rio_7.set('fieldImages', {'fid': 'TextEdit', 'Distancia': 'Range', 'Tipoc': 'TextEdit', });
lyr_cultivos_1.set('fieldLabels', {'fid': 'no label', 'area': 'no label', 'perimetro': 'no label', 'Tipo': 'no label', });
lyr_redvial_2.set('fieldLabels', {'fid': 'no label', 'Estado': 'no label', 'Tipo': 'no label', 'Distancia': 'no label', });
lyr_casas_3.set('fieldLabels', {'fid': 'no label', 'dueño': 'no label', 'Tipo': 'no label', });
lyr_reservorios_4.set('fieldLabels', {'fid': 'no label', 'Estado': 'no label', 'Area': 'no label', 'Perimetro': 'no label', });
lyr_pradera_5.set('fieldLabels', {'fid': 'no label', 'Area': 'no label', 'Perimetro': 'no label', 'Estado': 'no label', });
lyr_alberca_6.set('fieldLabels', {'fid': 'no label', 'Tipo': 'no label', 'Area': 'no label', 'Perimetro': 'no label', });
lyr_rio_7.set('fieldLabels', {'fid': 'no label', 'Distancia': 'no label', 'Tipoc': 'no label', });
lyr_rio_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});