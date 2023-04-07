using Microsoft.EntityFrameworkCore;
public class BaseRepository<T> : IRepository<T> where T: BaseEntity
{
    private readonly ECommerceDbContext _context;

    public BaseRepository(ECommerceDbContext context)
    {
        _context = context;
    }

    public async Task<T> GetByIdAsync(int id)
    {
        return await _context.Set<T>().FindAsync(id) ?? default!;
    }

    public async Task<IEnumerable<T>> GetAllAsync()
    {
        return await _context.Set<T>().ToListAsync();
    }

    public async Task<T> CreateAsync(T entity)
    {
        var createdEntity = await _context.Set<T>().AddAsync(entity);
        await _context.SaveChangesAsync();
        return createdEntity.Entity;
    }

    public async Task UpdateAsync(T entity)
    {
        _context.Entry(entity).State = EntityState.Modified;
        await _context.SaveChangesAsync();
    }

    public async Task DeleteAsync(int id)
    {
        var entity = await _context.Set<T>().FindAsync(id);
        if(entity is null)
        {
            throw new KeyNotFoundException();
        }

        _context.Set<T>().Remove(entity);
        await _context.SaveChangesAsync();
    }

}
