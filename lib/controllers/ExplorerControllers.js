const Reader=require("./../utils/Reader");
const ExplorerService=require("./../services/ExplorerServices");
const FizzBuzzService=require("./../services/FizzBuzzService");

class ExplorerController{
    static getExplorerByMission(mission){
        const list=Reader.readJsonFile("explorers.json");
        const Explorer=ExplorerService.filterByMission(list,mission);
        return Explorer;
    }
    static getnumber(number){
        const Explorer=FizzBuzzService.applyValidationInNumber(number);
        return Explorer;
    }
}

module.exports=ExplorerController;
