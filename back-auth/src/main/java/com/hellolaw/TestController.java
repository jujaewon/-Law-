package com.hellolaw;


import com.hellolaw.auth.entity.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class TestController {

  @GetMapping("/test")
  public String test(){
    // db 연동 테스트
     User user = User.builder()
        .nickname("test")
        .build();
     log.info("user: {}", user);
    return "123";
  }


}
