package pl.mateuszsitek.DogGo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;
import pl.mateuszsitek.DogGo.model.Advertisement;


import java.util.ArrayList;
import java.util.HashMap;

// FRONTEND TEST
@RestController
@CrossOrigin(origins="http://localhost:3000")
public class Hello {

    @GetMapping("/sayHello")
    public String sayHello()  {
        return "hello";
    }
/*
    @GetMapping("/api/users")
    public ArrayList<HashMap<String,String>> advertisement(){

        ArrayList<HashMap<String,String>> list = new ArrayList<>();
        Advertisement advertisement =new Advertisement();
        advertisement.getUsers();
        HashMap<String,String>map=new HashMap<>();
        map.put("name","ala");
        map.put("dayandhour","21 marzec 20:20");
        map.put("reservedby","Marek");
        map.put("note","super pies");

        HashMap<String,String>map2=new HashMap<>();
        map2.put("name","ola");
        map2.put("dayandhour","22 marzec 21:21");
        map2.put("reservedby","Stefan");
        map2.put("note","fajny pies");

        list.add(0,map);
        list.add(1,map2);

        return list;
    }
*/

}

