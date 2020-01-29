import { TestComponent } from "./test.component"


describe('Functional block test', ()=>{
  let service
  beforeEach(()=>{
  service=new TestComponent()
  })

  it('below five test', ()=>{
    expect(service.test(4)).toBe('Poor')
  })

  it('above five test', ()=>{
    expect(service.test(6)).toBe('very Good')
  })
})
