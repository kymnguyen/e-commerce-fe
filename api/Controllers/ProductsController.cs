using Microsoft.AspNetCore.Mvc;

namespace api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ProductsController : ControllerBase
{
    private readonly IRepository<Product> _productRepository;

    public ProductsController(IRepository<Product> productRepository)
    {
        _productRepository = productRepository;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ProductDto>>> Get()
    {
        var shops = await _productRepository.GetAllAsync();
        return Ok(shops.OrderByDescending(shop => shop.Price).Select(shop => shop.ToDto<Product, ProductDto>()));
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ProductDto>> Get(int id)
    {
        var shop = await _productRepository.GetByIdAsync(id);
        if (shop == null)
        {
            return NotFound();
        }
        return Ok(shop.ToDto<Product, ProductDto>());
    }

    [HttpPost]
    public async Task<ActionResult<ProductDto>> Create(ProductDto shopForCreateDto)
    {
        var shop = shopForCreateDto.ToEntity<ProductDto, Product>();
        var createdShop = await _productRepository.CreateAsync(shop);
        return CreatedAtAction(nameof(Get), new { id = createdShop.Id }, createdShop.ToDto<Product, ProductDto>());
    }

    [HttpPut("{id}")]
    public async Task<ActionResult> Update(int id, ProductDto shopForUpdateDto)
    {
        if (shopForUpdateDto == null || id != shopForUpdateDto.Id)
        {
            return BadRequest();
        }
        var shop = await _productRepository.GetByIdAsync(id);
        if (shop == null)
        {
            return NotFound();
        }
        await _productRepository.UpdateAsync(shopForUpdateDto.ToEntity<ProductDto, Product>());
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> Delete(int id)
    {
        var shop = await _productRepository.GetByIdAsync(id);
        if (shop == null)
        {
            return NotFound();
        }
        await _productRepository.DeleteAsync(id);
        return NoContent();
    }
}