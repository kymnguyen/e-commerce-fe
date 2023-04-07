using Microsoft.AspNetCore.Mvc;

namespace api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CustomersController : ControllerBase
{
    private readonly IRepository<Customer> _customerRepository;
    public CustomersController(IRepository<Customer> customerRepository)
    {
        _customerRepository = customerRepository;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<CustomerDto>>> GetAll()
    {
        var customers = await _customerRepository.GetAllAsync();
        return Ok(customers.OrderBy(cust => cust.Email).Select(customer => customer.ToDto<Customer, CustomerDto>()));
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<CustomerDto>> GetById(int id)
    {
        var customer = await _customerRepository.GetByIdAsync(id);
        if (customer == null)
        {
            return NotFound();
        }
        return Ok(customer.ToDto<Customer, CustomerDto>());
    }

    [HttpPost]
    public async Task<ActionResult<CustomerDto>> Create(CustomerDto customer)
    {
        if (customer == null)
        {
            return BadRequest();
        }
        var createdCustomer = await _customerRepository.CreateAsync(customer.ToEntity<CustomerDto, Customer>());
        return CreatedAtAction(nameof(GetById), new { id = createdCustomer.Id }, createdCustomer.ToDto<Customer, CustomerDto>());
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, CustomerDto customer)
    {
        if (customer == null || id != customer.Id)
        {
            return BadRequest();
        }
        var existingCustomer = await _customerRepository.GetByIdAsync(id);
        if (existingCustomer == null)
        {
            return NotFound();
        }
        await _customerRepository.UpdateAsync(customer.ToEntity<CustomerDto, Customer>());
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        Customer existingCustomer = await _customerRepository.GetByIdAsync(id);
        if (existingCustomer == null)
        {
            return NotFound();
        }

        await _customerRepository.DeleteAsync(id);
        return NoContent();
    }

    [HttpGet("/sorted-data")]
    public async Task<ActionResult<IEnumerable<CustomerDto>>>  SortData()
    {
        var customers = await _customerRepository.GetAllAsync();
        return Ok(customers.OrderBy(cust => cust.Email).Select(customer => customer.ToDto<Customer, CustomerDto>()));
    }
}
