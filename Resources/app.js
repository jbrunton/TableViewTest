var win = Titanium.UI.createWindow({
        backgroundColor : '#fff'
});

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
                text: "Description goes here",
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
    image.image = "http://lorempixel.com/80/43/cats/1/";
    image.left = 10;
    image.top = 2;
    row.add(image);
    return row;
}

function locationHeader() {
    var locView = Ti.UI.createView();
    var vldString = "location description";
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
            var button = Ti.UI.createButton({ fontWeight: 'bold', fontSize: 18, title: "Load more results" });
            button.height= 40;
            button.left=10;
            button.right=10;
            return button;
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
    
});

function rowClickHandler(e) {
    if (e.row.className === "loadMoreVehicles") {
        button.enabled = false;
        setTimeout(function() {
            button.enabled = true;
            data[data.length - 1].add(makeRow());
            data[data.length - 1].add(makeRow());
            data[data.length - 1].add(makeRow());
            section = Ti.UI.createTableViewSection({headerView: locationHeader()});
            section.add(makeRow());
            section.add(makeRow());
            section.add(makeRow());
            section.add(makeRow());
            section.add(makeRow());
            
            button = makeButton();
            buttonRow = makeButtonRow();
            buttonRow.add(button);
            section.add(buttonRow);
            
            data.push(section);
            table.setData(data);
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

var button = makeButton();
var buttonRow = makeButtonRow();
buttonRow.add(button);
section.add(buttonRow);

data.push(section);

table.setData(data);
win.add(table);

win.open();
