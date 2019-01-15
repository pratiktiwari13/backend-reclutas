module.exports = {
    convert:function(req,res,next){
        let tables = Object.keys(req.body.data);
        let arr = req.body.data;
        tables.forEach(function (table) {
            let columns = Object.keys(arr[table]);
            columns.forEach(function (column) {
                if(column.indexOf("-img") !== -1){
                    console.log("hi");
                    let end = column.indexOf("-img");
                    (arr[table])[column.slice(0,end)] = Buffer.from((arr[table])[column],'base64');
                    delete (arr[table])[column];
                }
            })
        });
        req.body.data = arr;
        next();
    }
};