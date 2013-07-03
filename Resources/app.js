var win = Titanium.UI.createWindow({
        backgroundColor : '#fff'
});

var num = 0;
var indicator;

function makeRow() {
    var e = {
        borderWidth: 0,
        borderRadius: 0,
        borderColor: "transparent",
        color: "#000",
        hasChild: false,
        className: "vehicle",
        height: 80
    };
    var row = Ti.UI.createTableViewRow(e);
    var vLabels = Ti.UI.createView();
    vLabels.top = 2;
    vLabels.left = 95;
    vLabels.width = 195;
    var carTitle = Ti.UI.createLabel({
                top: 5,
                left: 0,
                font: {fontWeight:"bold", fontSize: 12},
                text: "Description for #" + num,
                color: '#f58025',
                height: 16
            });
    vLabels.add(carTitle);
    var carInfoPrice = Ti.UI.createLabel({
                    top: 20,
                    left: 0,
                    font: {fontSize: 12},
                    minimumFontSize: 10,
                    color: '#696a6c',
                    text: "£7 per day"
                });
    vLabels.add(carInfoPrice);
    row.add(vLabels);
    var image = Ti.UI.createImageView();
    image.width = 80;
    image.height = 43;
    image.image = "http://lorempixel.com/80/43/cats/" + (num % 10 + 1) + "/";
    image.left = 10;
    image.top = 2;
    row.add(image);
    num++;
    return row;
}

function locationHeader() {
    var locView = Ti.UI.createView();
    var vldString = "location description " + num;
    var locName = Ti.UI.createLabel({
        text: vldString,
        font: {
            fontWeight: 'bold'
        },
        textAlign: 'left',
        left: 20,
        width: 205
    });

    locView.add(locName);
    return locView;
}

function makeButton() {
            var button = Ti.UI.createButton({
                fontWeight: 'bold',
                fontSize: 18,
                title: "Load more results",
                borderRadius: 15,
                borderWidth: 1,
                borderColor: '#9CC1E6',
                backgroundColor: '#DDD',
                backgroundImage: 'NONE'
            });
            button.height= 40;
            button.left=10;
            button.right=10;
            return button;
}

function makeIndicator() {
    var indicator = Titanium.UI.createActivityIndicator();
    indicator.left = 250;
    return indicator;
}

function makeButtonRow() {
    
    var e = {
                        color: "#000",
                        className: "loadMoreVehicles",
                        height: 50,
                        width: Ti.UI.FILL
    };
    var row = Ti.UI.createTableViewRow(e);
    return row;
}

var table = Titanium.UI.createTableView({
    style: Ti.UI.iPhone.TableViewStyle.GROUPED
});

function rowClickHandler(e) {
    indicator.show();
    if (e.row.className === "loadMoreVehicles") {
        button.enabled = false;
        setTimeout(function() {
            button.enabled = true;
            table.deleteRow(e.index);
            section = Ti.UI.createTableViewSection({headerView: locationHeader()});
            table.appendSection(section);
            table.appendRow(makeRow());
            table.appendRow(makeRow());
            table.appendRow(makeRow());
            table.appendRow(makeRow());
            table.appendRow(makeRow());
            
            button = makeButton();
            buttonRow = makeButtonRow();
            buttonRow.add(button);
            
            indicator.hide();
            indicator = makeIndicator();
            buttonRow.add(indicator);

            table.appendRow(buttonRow);
        }, 1000);
    }
}

table.addEventListener("click", rowClickHandler);

var data = [];

var section = Ti.UI.createTableViewSection({headerView: locationHeader()});
section.add(makeRow());
section.add(makeRow());
data.push(section);

section = Ti.UI.createTableViewSection({headerView: locationHeader()});
section.add(makeRow());
section.add(makeRow());
data.push(section);

section = Ti.UI.createTableViewSection({headerView: locationHeader()});
section.add(makeRow());
section.add(makeRow());
section.add(makeRow());
section.add(makeRow());
section.add(makeRow());
data.push(section);

section = Ti.UI.createTableViewSection({headerView: locationHeader()});
section.add(makeRow());
section.add(makeRow());
data.push(section);

section = Ti.UI.createTableViewSection({headerView: locationHeader()});
section.add(makeRow());
section.add(makeRow());
data.push(section);

section = Ti.UI.createTableViewSection({headerView: locationHeader()});
section.add(makeRow());
section.add(makeRow());
section.add(makeRow());
section.add(makeRow());
section.add(makeRow());

data.push(section);

var button = makeButton();
var buttonRow = makeButtonRow();
buttonRow.add(button);
indicator = makeIndicator();
buttonRow.add(indicator);
data.push(buttonRow);

table.setData(data);
win.add(table);

win.open();
