/* global app, Chart, Infinity, Utils, Widget */

'use strict';
class LineScatterComboWidget extends Widget {

    getHtml(widgets, d) {
        const o = this.options;

        const demo = [
            {label: 'USD', color: '#007aff', values: [{x: 2005, y: 80.8}, {x: 2005.08, y: 93.1}, {x: 2005.17, y: 92.5}, {x: 2005.25, y: 87.8}, {x: 2005.33, y: 90.4}, {x: 2005.42, y: 87.7}, {x: 2005.5, y: 94.4}, {x: 2005.58, y: 94.1}, {x: 2005.67, y: 87.7}, {x: 2005.75, y: 91.6}, {x: 2005.83, y: 96.9}, {x: 2005.92, y: 145.7}, {x: 2006, y: 198.5}, {x: 2006.08, y: 284.9}, {x: 2006.17, y: 266.7}, {x: 2006.25, y: 449.4}, {x: 2006.33, y: 554.8}, {x: 2006.42, y: 542.9}, {x: 2006.5, y: 304.7}, {x: 2006.58, y: 220.8}, {x: 2006.67, y: 171.8}, {x: 2006.75, y: 148.4}, {x: 2006.83, y: 192.8}, {x: 2006.92, y: 174.6}, {x: 2007, y: 155.7}, {x: 2007.08, y: 142}, {x: 2007.17, y: 152}, {x: 2007.25, y: 238.4}, {x: 2007.33, y: 234.1}, {x: 2007.42, y: 176.3}, {x: 2007.5, y: 199.2}, {x: 2007.58, y: 155.2}, {x: 2007.67, y: 141.4}, {x: 2007.75, y: 140.4}, {x: 2007.83, y: 152.1}, {x: 2007.92, y: 140.4}, {x: 2008, y: 113.6}, {x: 2008.08, y: 105.7}, {x: 2008.17, y: 98.7}, {x: 2008.25, y: 112}, {x: 2008.33, y: 130.7}, {x: 2008.42, y: 129.5}, {x: 2008.5, y: 143}, {x: 2008.58, y: 171}, {x: 2008.67, y: 165}, {x: 2008.75, y: 163}, {x: 2008.83, y: 155}, {x: 2008.92, y: 138}, {x: 2009, y: 123}, {x: 2009.08, y: 118}, {x: 2009.17, y: 109}, {x: 2009.25, y: 45.5}, {x: 2009.33, y: 47.7}, {x: 2009.42, y: 47.1}, {x: 2009.5, y: 41.6}, {x: 2009.58, y: 45.8}, {x: 2009.67, y: 47.3}, {x: 2009.75, y: 52.8}, {x: 2009.83, y: 53.1}, {x: 2009.92, y: 52.2}, {x: 2010, y: 47.7}, {x: 2010.08, y: 48}, {x: 2010.17, y: 89.9}, {x: 2010.25, y: 116.5}, {x: 2010.33, y: 185.5}, {x: 2010.42, y: 171.6}, {x: 2010.5, y: 315.3}, {x: 2010.58, y: 461.2}, {x: 2010.67, y: 449.6}, {x: 2010.75, y: 291.4}, {x: 2010.83, y: 196.9}, {x: 2010.92, y: 174.6}, {x: 2011, y: 157.5}, {x: 2011.08, y: 232.5}, {x: 2011.17, y: 191.8}, {x: 2011.25, y: 212.2}, {x: 2011.33, y: 171}, {x: 2011.42, y: 189.8}, {x: 2011.5, y: 359.2}, {x: 2011.58, y: 332.2}, {x: 2011.67, y: 220}, {x: 2011.75, y: 246.8}, {x: 2011.83, y: 186}, {x: 2011.92, y: 151}, {x: 2012, y: 156}, {x: 2012.08, y: 147}, {x: 2012.17, y: 137}, {x: 2012.25, y: 115}, {x: 2012.33, y: 110}, {x: 2012.42, y: 101}, {x: 2012.5, y: 90}, {x: 2012.58, y: 88}, {x: 2012.67, y: 99}, {x: 2012.75, y: 121}, {x: 2012.83, y: 148}, {x: 2012.92, y: 134}, {x: 2013, y: 131}, {x: 2013.08, y: 133}, {x: 2013.17, y: 115}, {x: 2013.25, y: 123}, {x: 2013.33, y: 118}, {x: 2013.42, y: 102}, {x: 2013.5, y: 75.5}, {x: 2013.58, y: 76}, {x: 2013.67, y: 78.3}, {x: 2013.75, y: 72.6}, {x: 2013.83, y: 75.5}, {x: 2013.92, y: 77.3}, {x: 2014, y: 79.3}, {x: 2014.08, y: 84.3}, {x: 2014.17, y: 82.9}, {x: 2014.25, y: 81.3}, {x: 2014.33, y: 80.6}, {x: 2014.42, y: 132.1}, {x: 2014.5, y: 173.9}, {x: 2014.58, y: 278}, {x: 2014.67, y: 230}, {x: 2014.75, y: 387.5}, {x: 2014.83, y: 564.9}, {x: 2014.92, y: 590.7}, {x: 2015, y: 403.6}, {x: 2015.08, y: 268.8}, {x: 2015.17, y: 234.5}, {x: 2015.25, y: 187.7}, {x: 2015.33, y: 250.9}, {x: 2015.42, y: 226.8}, {x: 2015.5, y: 233.9}, {x: 2015.58, y: 203.3}, {x: 2015.67, y: 225.8}, {x: 2015.75, y: 354}, {x: 2015.83, y: 318.8}, {x: 2015.92, y: 264.6}, {x: 2016, y: 281.1}, {x: 2016.08, y: 224}, {x: 2016.17, y: 192}, {x: 2016.25, y: 183}, {x: 2016.33, y: 180}, {x: 2016.42, y: 154}, {x: 2016.5, y: 135}, {x: 2016.58, y: 136}, {x: 2016.67, y: 124}, {x: 2016.75, y: 133}, {x: 2016.83, y: 148}, {x: 2016.92, y: 133}, {x: 2017, y: 151}, {x: 2017.08, y: 185}, {x: 2017.17, y: 167}, {x: 2017.25, y: 182}, {x: 2017.33, y: 184}, {x: 2017.42, y: 144}, {x: 2017.5, y: 143}, {x: 2017.58, y: 140}, {x: 2017.67, y: 126}]},
            {label: 'EUR', pointRadius: 3, color: '#f07109', values: [{x: 2005, y: 81.6}, {x: 2005.08, y: 104.2}, {x: 2005.17, y: 85.3}, {x: 2005.25, y: 92.9}, {x: 2005.33, y: 87.2}, {x: 2005.42, y: 85.1}, {x: 2005.5, y: 95.5}, {x: 2005.58, y: 92.2}, {x: 2005.67, y: 85.3}, {x: 2005.75, y: 91.9}, {x: 2005.83, y: 127.2}, {x: 2005.92, y: 146}, {x: 2006, y: 226.2}, {x: 2006.08, y: 241.7}, {x: 2006.17, y: 288.5}, {x: 2006.25, y: 575}, {x: 2006.33, y: 481}, {x: 2006.42, y: 439.9}, {x: 2006.5, y: 247}, {x: 2006.58, y: 205.7}, {x: 2006.67, y: 172.1}, {x: 2006.75, y: 142.7}, {x: 2006.83, y: 175.2}, {x: 2006.92, y: 168.7}, {x: 2007, y: 149.4}, {x: 2007.08, y: 137.9}, {x: 2007.17, y: 152.6}, {x: 2007.25, y: 208.1}, {x: 2007.33, y: 204.7}, {x: 2007.42, y: 185.9}, {x: 2007.5, y: 177.7}, {x: 2007.58, y: 137.4}, {x: 2007.67, y: 138.3}, {x: 2007.75, y: 135.2}, {x: 2007.83, y: 136.7}, {x: 2007.92, y: 131.5}, {x: 2008, y: 116.2}, {x: 2008.08, y: 100.9}, {x: 2008.17, y: 101}, {x: 2008.25, y: 117.7}, {x: 2008.33, y: 136.5}, {x: 2008.42, y: 128.5}, {x: 2008.5, y: 153.8}, {x: 2008.58, y: 159}, {x: 2008.67, y: 196}, {x: 2008.75, y: 146}, {x: 2008.83, y: 146}, {x: 2008.92, y: 134}, {x: 2009, y: 121}, {x: 2009.08, y: 116}, {x: 2009.17, y: 103}, {x: 2009.25, y: 41.9}, {x: 2009.33, y: 55}, {x: 2009.42, y: 43.1}, {x: 2009.5, y: 43.2}, {x: 2009.58, y: 44.1}, {x: 2009.67, y: 45.4}, {x: 2009.75, y: 52.2}, {x: 2009.83, y: 50.6}, {x: 2009.92, y: 47.6}, {x: 2010, y: 47.7}, {x: 2010.08, y: 66.6}, {x: 2010.17, y: 89.1}, {x: 2010.25, y: 144.9}, {x: 2010.33, y: 165.8}, {x: 2010.42, y: 188.2}, {x: 2010.5, y: 412.2}, {x: 2010.58, y: 436.1}, {x: 2010.67, y: 383.9}, {x: 2010.75, y: 232.9}, {x: 2010.83, y: 182.1}, {x: 2010.92, y: 164.7}, {x: 2011, y: 167.2}, {x: 2011.08, y: 193.9}, {x: 2011.17, y: 175.6}, {x: 2011.25, y: 191.1}, {x: 2011.33, y: 165.4}, {x: 2011.42, y: 218.2}, {x: 2011.5, y: 290}, {x: 2011.58, y: 271.2}, {x: 2011.67, y: 237.3}, {x: 2011.75, y: 220.8}, {x: 2011.83, y: 167}, {x: 2011.92, y: 154}, {x: 2012, y: 136}, {x: 2012.08, y: 138}, {x: 2012.17, y: 127}, {x: 2012.25, y: 121}, {x: 2012.33, y: 102}, {x: 2012.42, y: 99}, {x: 2012.5, y: 89}, {x: 2012.58, y: 84}, {x: 2012.67, y: 97}, {x: 2012.75, y: 115}, {x: 2012.83, y: 133}, {x: 2012.92, y: 151}, {x: 2013, y: 122}, {x: 2013.08, y: 114}, {x: 2013.17, y: 109}, {x: 2013.25, y: 120}, {x: 2013.33, y: 112}, {x: 2013.42, y: 92}, {x: 2013.5, y: 68.1}, {x: 2013.58, y: 85.9}, {x: 2013.67, y: 72.8}, {x: 2013.75, y: 77.2}, {x: 2013.83, y: 76.5}, {x: 2013.92, y: 126.7}, {x: 2014, y: 81.6}, {x: 2014.08, y: 80.7}, {x: 2014.17, y: 78.4}, {x: 2014.25, y: 82.9}, {x: 2014.33, y: 106.3}, {x: 2014.42, y: 132.2}, {x: 2014.5, y: 199.1}, {x: 2014.58, y: 236.8}, {x: 2014.67, y: 246.9}, {x: 2014.75, y: 490.2}, {x: 2014.83, y: 532}, {x: 2014.92, y: 538.1}, {x: 2015, y: 341.5}, {x: 2015.08, y: 254.5}, {x: 2015.17, y: 200.8}, {x: 2015.25, y: 192.4}, {x: 2015.33, y: 232.9}, {x: 2015.42, y: 206.7}, {x: 2015.5, y: 215.5}, {x: 2015.58, y: 197.2}, {x: 2015.67, y: 241.7}, {x: 2015.75, y: 290.1}, {x: 2015.83, y: 290.2}, {x: 2015.92, y: 275.6}, {x: 2016, y: 253.8}, {x: 2016.08, y: 203}, {x: 2016.17, y: 185}, {x: 2016.25, y: 161}, {x: 2016.33, y: 158}, {x: 2016.42, y: 138}, {x: 2016.5, y: 135}, {x: 2016.58, y: 129}, {x: 2016.67, y: 130}, {x: 2016.75, y: 141}, {x: 2016.83, y: 133}, {x: 2016.92, y: 133}, {x: 2017, y: 148}, {x: 2017.08, y: 176}, {x: 2017.17, y: 193}, {x: 2017.25, y: 166}, {x: 2017.33, y: 154}, {x: 2017.42, y: 146}, {x: 2017.5, y: 139}, {x: 2017.58, y: 138}, {x: 2017.67, y: 123}]},
            {label: 'GBP', color: '#8e8e93', values: [{x: 2005, y: 77.1}, {x: 2005.08, y: 97.1}, {x: 2005.17, y: 88.5}, {x: 2005.25, y: 95.7}, {x: 2005.33, y: 85.5}, {x: 2005.42, y: 90.3}, {x: 2005.5, y: 94.5}, {x: 2005.58, y: 89.8}, {x: 2005.67, y: 85.6}, {x: 2005.75, y: 90.6}, {x: 2005.83, y: 145.3}, {x: 2005.92, y: 193}, {x: 2006, y: 247.4}, {x: 2006.08, y: 235.1}, {x: 2006.17, y: 303.8}, {x: 2006.25, y: 613.5}, {x: 2006.33, y: 504.6}, {x: 2006.42, y: 343.3}, {x: 2006.5, y: 233.2}, {x: 2006.58, y: 206.1}, {x: 2006.67, y: 170.3}, {x: 2006.75, y: 190.1}, {x: 2006.83, y: 185.2}, {x: 2006.92, y: 170.8}, {x: 2007, y: 139.9}, {x: 2007.08, y: 145.8}, {x: 2007.17, y: 207}, {x: 2007.25, y: 242.5}, {x: 2007.33, y: 180.3}, {x: 2007.42, y: 213.6}, {x: 2007.5, y: 171.9}, {x: 2007.58, y: 147.3}, {x: 2007.67, y: 138.5}, {x: 2007.75, y: 132.3}, {x: 2007.83, y: 140}, {x: 2007.92, y: 125}, {x: 2008, y: 109.1}, {x: 2008.08, y: 101.2}, {x: 2008.17, y: 101.6}, {x: 2008.25, y: 126.1}, {x: 2008.33, y: 123}, {x: 2008.42, y: 135.3}, {x: 2008.5, y: 165}, {x: 2008.58, y: 155}, {x: 2008.67, y: 193}, {x: 2008.75, y: 150}, {x: 2008.83, y: 136}, {x: 2008.92, y: 128}, {x: 2009, y: 112}, {x: 2009.08, y: 113}, {x: 2009.17, y: 110}, {x: 2009.25, y: 38}, {x: 2009.33, y: 48.1}, {x: 2009.42, y: 43.4}, {x: 2009.5, y: 46.8}, {x: 2009.58, y: 45.5}, {x: 2009.67, y: 48.6}, {x: 2009.75, y: 52.1}, {x: 2009.83, y: 50.7}, {x: 2009.92, y: 47.9}, {x: 2010, y: 47}, {x: 2010.08, y: 84.6}, {x: 2010.17, y: 116}, {x: 2010.25, y: 165.1}, {x: 2010.33, y: 158.6}, {x: 2010.42, y: 197.9}, {x: 2010.5, y: 437.5}, {x: 2010.58, y: 441.6}, {x: 2010.67, y: 319.9}, {x: 2010.75, y: 213.6}, {x: 2010.83, y: 180.4}, {x: 2010.92, y: 172.5}, {x: 2011, y: 229.2}, {x: 2011.08, y: 198.8}, {x: 2011.17, y: 211.2}, {x: 2011.25, y: 179.1}, {x: 2011.33, y: 174.1}, {x: 2011.42, y: 296.4}, {x: 2011.5, y: 347.7}, {x: 2011.58, y: 232.9}, {x: 2011.67, y: 263.2}, {x: 2011.75, y: 201}, {x: 2011.83, y: 159}, {x: 2011.92, y: 153}, {x: 2012, y: 127}, {x: 2012.08, y: 134}, {x: 2012.17, y: 122}, {x: 2012.25, y: 112}, {x: 2012.33, y: 101}, {x: 2012.42, y: 93}, {x: 2012.5, y: 89}, {x: 2012.58, y: 75}, {x: 2012.67, y: 101}, {x: 2012.75, y: 123}, {x: 2012.83, y: 130}, {x: 2012.92, y: 155}, {x: 2013, y: 129}, {x: 2013.08, y: 108}, {x: 2013.17, y: 126}, {x: 2013.25, y: 123}, {x: 2013.33, y: 109}, {x: 2013.42, y: 99}, {x: 2013.5, y: 62.2}, {x: 2013.58, y: 82.7}, {x: 2013.67, y: 72.8}, {x: 2013.75, y: 77.1}, {x: 2013.83, y: 76.7}, {x: 2013.92, y: 76.2}, {x: 2014, y: 83.5}, {x: 2014.08, y: 82.4}, {x: 2014.17, y: 78.7}, {x: 2014.25, y: 78.5}, {x: 2014.33, y: 123.9}, {x: 2014.42, y: 171}, {x: 2014.5, y: 237.5}, {x: 2014.58, y: 223}, {x: 2014.67, y: 262.4}, {x: 2014.75, y: 532.5}, {x: 2014.83, y: 564.5}, {x: 2014.92, y: 464}, {x: 2015, y: 294.8}, {x: 2015.08, y: 250.7}, {x: 2015.17, y: 207.3}, {x: 2015.25, y: 237.8}, {x: 2015.33, y: 226.6}, {x: 2015.42, y: 239.1}, {x: 2015.5, y: 206.7}, {x: 2015.58, y: 213.1}, {x: 2015.67, y: 300.3}, {x: 2015.75, y: 326.7}, {x: 2015.83, y: 267.2}, {x: 2015.92, y: 298.8}, {x: 2016, y: 242}, {x: 2016.08, y: 198}, {x: 2016.17, y: 184}, {x: 2016.25, y: 154}, {x: 2016.33, y: 156}, {x: 2016.42, y: 138}, {x: 2016.5, y: 133}, {x: 2016.58, y: 125}, {x: 2016.67, y: 131}, {x: 2016.75, y: 147}, {x: 2016.83, y: 125}, {x: 2016.92, y: 134}, {x: 2017, y: 167}, {x: 2017.08, y: 164}, {x: 2017.17, y: 215}, {x: 2017.25, y: 168}, {x: 2017.33, y: 143}, {x: 2017.42, y: 150}, {x: 2017.5, y: 138}, {x: 2017.58, y: 130}, {x: 2017.67, y: 127}]},
            {label: 'USD SM', color: '#007aff', pointRadius: 10, pointStyle: 'rectRot', values: [{x: 2018, y: 145}, {x: 2019, y: 155}, {x: 2020, y: 165}]},
            {label: 'EUR SM', color: '#f07109', pointStyle: 'rect', values: [{x: 2018, y: 165}, {x: 2019, y: 175}, {x: 2020, y: 185}]},
            {label: 'GBP SM', color: '#8e8e93', pointStyle: 'triangle', values: [{x: 2018, y: 185}, {x: 2019, y: 195}, {x: 2020, y: 205}]}
        ];

        const v = {
            datasets: $.extend(true, [], o.datasets || [], d.datasets || demo),
            legendVisible: this.getRealValue('legendVisible', d, true),
            paddingTop: this.getRealValue('paddingTop', d, 0),
            paddingRight: this.getRealValue('paddingRight', d, 0),
            paddingBottom: this.getRealValue('paddingBottom', d, 0),
            paddingLeft: this.getRealValue('paddingLeft', d, 0),
            tooltipsEnabled: this.getRealValue('tooltipsEnabled', d, true),
            tooltipsMode: this.getRealValue('tooltipsMode', d, 'nearest'),
            aspectRatio: this.getRealValue('aspectRatio', d, null),
            maintainAspectRatio: this.getRealValue('maintainAspectRatio', d, true)
        };

        this.value = v;

        return `
<div class="ks-chart-holder" style="${this.getGeneralStyles(d).join('')}">
    <div class="ks-chart-widget" style="width: 100%; height: 100%;"><canvas id="${o.id}Canvas"></canvas></div>
    ${this.createLegendHtml(v)}
</div>`;
    }

    createLegendHtml(v) {
        if (!v.legendVisible) {
            return '';
        }

        let i, e, a = [], b = [], c, n, p, d = v.datasets, len = d.length, s = {circle: 'border', rect: 'background', rectRot: 'background', triangle: 'border'};

        for (i = 0; i < len; ++i) {
            e = d[i];
            c = e.color;
            n = e.label;
            p = e.pointStyle;

            if (p) {
                b.push('<div data-id="', i, '" class="ChartLegendTag HasIcon ', p, '" style="background-color: ', c, ';"><div style="', s[p], '-color: ', c, ';"><\/div>', n, '<\/div>');
            } else {
                a.push('<div data-id="', i, '" class="ChartLegendTag" style="background-color: ', c, ';">', n, '<\/div>');
            }
        }

        return '<div id="AMLegendLine">' + a.join('') + '<\/div><div id="AMLegendScatter">' + b.join('') + '<\/div>';
    }

    initEventHandlers() {
        const ctx = document.getElementById(this.id + 'Canvas').getContext('2d'), chart = new Chart(ctx, this.getChartConfig());

        this.getSection().on('click', '.ChartLegendTag', e => {
            e = $(e.currentTarget);

            const id = e.data('id'), d = chart.getDatasetMeta(id), isHidden = (true === d.hidden), c = this.value.datasets[id].color;

            if (isHidden) {
                e.prop('style', 'color:#fff; background-color: ' + c + ';');
            } else {
                e.prop('style', 'border-width: thin; border-style:solid; border-radius: 2px; color: #000; background-color: #fff; border-color: ' + c + ';');
            }

            d.hidden = !isHidden;

            chart.update();

            return false;
        });
    }

    getChartConfig() {
        const datasets = [], xEdges = [], v = this.value;

        let e, f, yMin = Infinity, yMax = -Infinity, c, d, r, o;

        for (e of v.datasets) {
            d = e.values;
            c = e.color;
            r = e.pointRadius || (e.pointStyle ? 7 : 1);

            o = {
                data: d,
                pointBackgroundColor: c,
                borderColor: c,
                pointRadius: r,
                pointHitRadius: r,
                pointHoverRadius: r,
                fill: false
            };

            if (e.pointStyle) {
                o.showLine = false;
                o.pointStyle = e.pointStyle;
            }

            datasets.push(o);

            xEdges.push(d[0].x, d[d.length - 1].x);

            for (f of d) {
                if (f.y > yMax) {
                    yMax = f.y;
                }

                if (f.y < yMin) {
                    yMin = f.y;
                }
            }
        }

        const yBuffer = (yMax - yMin) * 0.1;

        yMin -= yBuffer;
        yMax += yBuffer;

        return {
            type: 'line',
            data: {
                datasets: datasets
            },
            options: {
                dragData: true,
                dragDataRound: 2,
                dragOptions: {
                    showTooltip: v.tooltipsEnabled
                },
                onDragEnd: (e, datasetIndex, index, value) => {
                    let el = $('<div>').data('id', v.id).data('action', 'moved').data('lineIndex', datasetIndex).data('pointIndex', index).data('value', value);
                    Widget.doHandleSystemEvent(el, e);
                },
                responsiveAnimationDuration: 0,
                responsive: true,
                aspectRatio: v.aspectRatio,
                maintainAspectRatio: v.maintainAspectRatio,
                bezierCurve: true,
                //events: [],
                plugins: {
                    datalabels: {
                        display: false
                    }
                },
                title: {
                    display: false
                },
                tooltips: {
                    enabled: v.tooltipsEnabled,
                    mode: v.tooltipsMode,
                    intersect: false
                },
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                            type: 'linear',
                            display: true,
                            scaleLabel: {
                                display: false
                            },
                            ticks: {
                                min: parseInt(Math.min(...xEdges)),
                                max: parseInt(Math.max(...xEdges)),
                                stepSize: 1
                            },
                            gridLines: {
                                drawOnChartArea: false
                            }
                        }
                    ],
                    yAxes: [{
                            display: true,
                            scaleLabel: {
                                display: false
                            },
                            ticks: {
                                min: yMin,
                                max: yMax,
                                stepSize: (yMax - yMin) / 10,
                                callback: v => Utils.precisionRound(v, 1)
                            }
                        }
                    ]
                },
                layout: {
                    padding: {
                        left: v.paddingLeft,
                        right: v.paddingRight,
                        top: v.paddingTop,
                        bottom: v.paddingBottom
                    }
                },
                elements: {
                    line: {
                        borderWidth: 1.5,
                        tension: 0.3 //disables bezier curves if 0
                    }
                }
            }
        };
    }
}
;