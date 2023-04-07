using Microsoft.AspNetCore.Mvc;

namespace api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ShopsController : ControllerBase
{
    private readonly IRepository<Shop> _shopRepository;

    public ShopsController(IRepository<Shop> shopRepository)
    {
        _shopRepository = shopRepository;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ShopDto>>> Get()
    {
        var shops = await _shopRepository.GetAllAsync();
        return Ok(shops.OrderByDescending(shop => shop.Location).Select(shop => shop.ToDto<Shop, ShopDto>()));
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ShopDto>> Get(int id)
    {
        var shop = await _shopRepository.GetByIdAsync(id);
        if (shop == null)
        {
            return NotFound();
        }
        return Ok(shop.ToDto<Shop, ShopDto>());
    }

    [HttpPost]
    public async Task<ActionResult<ShopDto>> Create(ShopDto shopForCreateDto)
    {
        var shop = shopForCreateDto.ToEntity<ShopDto, Shop>();
        var createdShop = await _shopRepository.CreateAsync(shop);
        return CreatedAtAction(nameof(Get), new { id = createdShop.Id }, createdShop.ToDto<Shop, ShopDto>());
    }

    [HttpPut("{id}")]
    public async Task<ActionResult> Update(int id, ShopDto shopForUpdateDto)
    {
        if (shopForUpdateDto == null || id != shopForUpdateDto.Id)
        {
            return BadRequest();
        }
        var shop = await _shopRepository.GetByIdAsync(id);
        if (shop == null)
        {
            return NotFound();
        }
        await _shopRepository.UpdateAsync(shopForUpdateDto.ToEntity<ShopDto, Shop>());
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> Delete(int id)
    {
        var shop = await _shopRepository.GetByIdAsync(id);
        if (shop == null)
        {
            return NotFound();
        }
        await _shopRepository.DeleteAsync(id);
        return NoContent();
    }
}